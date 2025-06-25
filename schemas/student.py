from datetime import datetime
import uuid
from pydantic import BaseModel
from typing import Optional
from uuid import UUID

class StudentBase(BaseModel):
    student_name: str
    section: Optional[str] = None
    
class StudentResponse(StudentBase):
    id: uuid.UUID
    created_at: datetime

class StudentCreate(StudentBase):
    pass

    class Config:
        from_attributes = True  # For Pydantic v2