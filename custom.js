document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('start-cooking-btn')) return;  // recipe pages only

  const h1 = document.querySelector('h1');
  if (!h1 || h1.closest('.title-group')) return;

  const titleBar = h1.parentElement;
  const img = document.querySelector('div.mb-8 > div img');
  if (!img) return;

  // image + title side by side, buttons stay on the right
  const oldContainer = img.parentElement;
  const group = document.createElement('div');
  group.className = 'title-group';
  titleBar.insertBefore(group, h1);
  group.append(img, h1);
  if (oldContainer.children.length === 0) oldContainer.remove();

  // give the buttons the same look as the metadata pills
  titleBar.querySelectorAll('.btn').forEach(btn => {
    const primary = btn.classList.contains('btn-primary');
    btn.classList.remove('btn', 'btn-primary');
    btn.classList.add('metadata-pill', 'pill-action');
    if (primary) btn.classList.add('pill-action-primary');
  });
});
