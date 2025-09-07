from fastapi import APIRouter, UploadFile, File
from app.utils.ai_client import summarize_text
from app.utils.chunker import chunk_text
from app.utils.vector_store import add_documents

router = APIRouter()

@router.post("/summarize")
async def summarize(file: UploadFile = File(...)):
    text = (await file.read()).decode("utf-8", errors="ignore")

    chunks = chunk_text(text, max_chars=3000)
    add_documents(chunks)


    summary = summarize_text(text)
    return {"summary": summary}