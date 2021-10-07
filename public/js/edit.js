async function SubmitFormHandler() {
  const titleEl = $('#title');
  const contentEl = $('#description');
  const categoryEl = $('#options');
  let title = titleEl.val();
  let content = contentEl.val();
  let category =  categoryEl.val();

    if(title == "")
    {
      title = titleEl.attr('placeholder');
    }
    if(content == "")
    {
      content = contentEl.attr('placeholder');
    }
    if(category == "")
    {
      category = categoryEl.attr('placeholder');
    }
    const id = $('#form').data('id');

    const response = await fetch(`/api/ticket/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        category,
        content,
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(response, 'ticket submitted');
    window.location.href = '/homepage';
}

$('#submit').on('click', SubmitFormHandler);