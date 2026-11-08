export default function HistoryList({ events, page, totalPages, onPageChange }) {
  if (!events || events.length === 0) {
    return <p className="muted">Chưa có lịch sử thao tác nào.</p>;
  }

  return (
    <div>
      <ul className="enrollments">
        {events.map((ev) => (
          <li key={ev.id}>
            <div>
              <strong>{ev.class_section_id}</strong> -{" "}
              <span className={ev.event_type === "CREATED" ? "badge" : "badge full"}>
                {ev.event_type === "CREATED" ? "Tạo đăng ký" : "Hủy đăng ký"}
              </span>
              <span className="subtext">
                {new Date(ev.occurred_at).toLocaleString("vi-VN")}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="filters" style={{ marginTop: "12px", justifyContent: "space-between" }}>
        <button
          type="button"
          className="secondary"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          Trang trước
        </button>
        <span className="muted">Trang {page} / {totalPages || 1}</span>
        <button
          type="button"
          className="secondary"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Trang sau
        </button>
      </div>
    </div>
  );
}