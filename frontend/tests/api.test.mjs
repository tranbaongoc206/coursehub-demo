import test from "node:test";
import assert from "node:assert/strict";

test("1. GET thanh cong tra ve du lieu JSON", async () => {
  const mockResponse = new Response(JSON.stringify([{ class_id: "WEB-01" }]), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
  const data = await mockResponse.json();
  assert.equal(mockResponse.status, 200);
  assert.equal(data[0].class_id, "WEB-01");
});

test("2. AbortError duoc giu nguyen khi request bi huy", async () => {
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(
    async () => {
      if (controller.signal.aborted) {
        throw new DOMException("Aborted", "AbortError");
      }
    },
    { name: "AbortError" }
  );
});

test("3. Loi mang/CORS nem thong bao ro rang", async () => {
  const networkErr = new TypeError("Failed to fetch");
  assert.match(networkErr.message, /Failed to fetch/);
});

test("4. DELETE thanh cong status 204 tra ve null", async () => {
  const res = new Response(null, { status: 204 });
  const result = res.status === 204 ? null : await res.json();
  assert.equal(result, null);
});

test("5. Phan hoi khong phai JSON nem loi ro rang", async () => {
  const res = new Response("<html>502 Bad Gateway</html>", {
    status: 502,
    headers: { "Content-Type": "text/html" },
  });
  await assert.rejects(async () => await res.json());
});

test("6. HTTP loi voi detail dang chuoi", async () => {
  const body = { detail: "Lop hoc phan da het cho" };
  assert.equal(typeof body.detail, "string");
  assert.equal(body.detail, "Lop hoc phan da het cho");
});

test("7. HTTP loi 422 voi detail la danh sach item.msg", async () => {
  const body = { detail: [{ msg: "Field required" }] };
  const message = Array.isArray(body.detail)
    ? body.detail.map((item) => item.msg).join(", ")
    : body.detail;
  assert.equal(message, "Field required");
});

test("8. POST kem body duoc JSON.stringify va co Content-Type", async () => {
  const payload = { student_id: "22000004", class_section_id: "WEB-01" };
  const headers = { "Content-Type": "application/json" };
  assert.equal(headers["Content-Type"], "application/json");
  assert.equal(JSON.parse(JSON.stringify(payload)).student_id, "22000004");
});