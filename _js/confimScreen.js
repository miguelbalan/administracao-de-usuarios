export async function showDeleteConfirm() {
  return new Promise((resolve) => {
    const modal = document.getElementById('custom-modal');
    modal.style.display = 'flex';

    document.getElementById('btn-confirm').addEventListener("click", function () {
      modal.style.display = 'none';
      resolve(true);
    });

    document.getElementById('btn-cancel').addEventListener("click", function () {
      modal.style.display = 'none';
      resolve(false);
    });
  });
}
