from fastapi import APIRouter, UploadFile, File
from app.utils.ai_client import summarize_text

router = APIRouter()

@router.post("/summarize")
async def summarize(file: UploadFile = File(...)):
    text = (await file.read()).decode("utf-8", errors="ignore")
    summary = summarize_text(text)
    return {"summary": summary}