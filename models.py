from sqlalchemy import Column, String, Text, DateTime
from sqlalchemy.dialects.postgresql import UUID
import uuid
from datetime import datetime
from database import Base

class CPREntry(Base):
    __tablename__ = "cpr_entries"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    student_name = Column(String, nullable=False)
    coach_name = Column(String, nullable=False)
    progress_notes = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)
