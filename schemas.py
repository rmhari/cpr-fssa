from pydantic import BaseModel
from typing import Optional
from datetime import datetime
import uuid

class CPREntryBase(BaseModel):
    student_name: str
    coach_name: str
    students_input: Optional[str] = None
    coach_reflection: Optional[str] = None
    manager_comment: Optional[str] = None
    idp: Optional[str] = None  # individual development plan
    follow_up: Optional[str] = None

class CPREntryCreate(CPREntryBase):
    pass

class CPREntryResponse(CPREntryBase):
    id: uuid.UUID
    created_at: datetime

    class Config:
        from_attributes = True
