"""
summary.py — GPT/Gemini article scoring and summarization
Author: Saad Namoune
"""

import json
import os

from openai import OpenAI
from loguru import logger

from workflow.gpt.prompt import multi_content_prompt


def evaluate_article_with_gpt(articles):
    article_links = [article.link for article in articles]
    logger.info(f"Scoring {len(article_links)} articles...")

    gpt_input = ""
    max_input_tokens = int(os.getenv("GPT_MAX_INPUT_TOKENS", 8000))
    for item in articles:
        content = item.summary[:max_input_tokens]
        gpt_input += f"```link: {item.link}, content:{content}```.\n"

    ai_provider = os.environ.get("AI_PROVIDER", "gemini")
    if ai_provider == "openai":
        response = request_openai(prompt=multi_content_prompt, content=gpt_input)
    else:
        response = request_gemini(prompt=multi_content_prompt, content=gpt_input)

    response_list = transform2json(response)
    if not response_list:
        return []
    if not isinstance(response_list, list):
        response_list = [response_list]

    evaluate_list = [item for item in response_list if item.get("title") and item.get("link")]
    return evaluate_list


def request_gemini(prompt, content):
    """Call Gemini API using the new google-genai SDK (gemini-1.5-flash)."""
    from google import genai
    from google.genai import types

    api_key = os.environ.get("GPT_API_KEY")
    if not api_key:
        raise ValueError("GPT_API_KEY environment variable is not set.")

    model_name = os.getenv("GPT_MODEL_NAME", "gemini-2.5-flash")
    client = genai.Client(api_key=api_key)

    input_text = f"{prompt}\n\n{content}"

    try:
        response = client.models.generate_content(
            model=model_name,
            contents=input_text,
            config=types.GenerateContentConfig(
                temperature=0.2,
                max_output_tokens=4096,
            ),
        )
        result = response.text
        logger.info(f"Gemini response ({len(result)} chars): {result[:200]}...")
        return result
    except Exception as e:
        logger.error(f"Gemini API call failed: {e}")
        return None


def request_openai(prompt, content):
    """Call OpenAI API (gpt-4o-mini by default)."""
    try:
        api_key = os.getenv("GPT_API_KEY")
        base_url = os.getenv("GPT_BASE_URL") or None
        model = os.getenv("GPT_MODEL_NAME", "gpt-4o-mini")

        client = OpenAI(api_key=api_key, base_url=base_url)
        chat_completion = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": content},
            ],
        )
        result = chat_completion.choices[0].message.content
        logger.debug(f"OpenAI response: {result[:200]}...")
        return result
    except Exception as e:
        logger.error(f"OpenAI API call failed: {e}")
        return ""


def transform2json(result):
    """Parse GPT/Gemini JSON response into a Python list."""
    if not result:
        return None
    text = result.strip()
    text = text.removeprefix("```json").removeprefix("```").removesuffix("```").strip()
    try:
        return json.loads(text)
    except Exception as e:
        logger.error(f"JSON parse failed: {e} — input: {text[:300]}")
        try:
            return eval(text)
        except Exception:
            return None
