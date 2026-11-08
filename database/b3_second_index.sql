-- Đo câu truy vấn thống kê sự kiện theo lớp và loại sự kiện
EXPLAIN (ANALYZE, BUFFERS)
SELECT id, student_id, class_section_id, event_type, occurred_at
FROM enrollment_events
WHERE class_section_id = 'WEB-01'
  AND event_type = 'CREATED'
ORDER BY occurred_at DESC;

-- Tạo composite index 
CREATE INDEX idx_enrollment_events_class_type_time
ON enrollment_events (class_section_id, event_type, occurred_at DESC);

ANALYZE enrollment_events;

-- Đo lại câu truy vấn sau khi có index
EXPLAIN (ANALYZE, BUFFERS)
SELECT id, student_id, class_section_id, event_type, occurred_at
FROM enrollment_events
WHERE class_section_id = 'WEB-01'
  AND event_type = 'CREATED'
ORDER BY occurred_at DESC;