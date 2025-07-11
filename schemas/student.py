
from pydantic import BaseModel
from uuid import UUID
from datetime import datetime
from typing import Optional


class StudentBase(BaseModel):
    student_name: str
    section: Optional[str] = None
    folder_link: Optional[str] = None  # ✅ include this


class StudentCreate(StudentBase):
    pass


class StudentUpdate(StudentBase):
    pass


class StudentResponse(StudentBase):
    id: UUID
    created_at: datetime

    class Config:
        orm_mode = True

