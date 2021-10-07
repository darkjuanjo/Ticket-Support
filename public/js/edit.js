async function SubmitFormHandler() {
  const title = $('#title').val();
  const content = $('#description').val().trim();
  const category = $('#options').val();


  if (!title && !content && !category) {
    return console.log('Error cannot leave empty fields!');
  } else {
    if(title == "")
    {
      title = $('#title').attr('placeholder');
    }
    if(content == "")
    {
      title = $('#description').attr('placeholder');
    }
    if(category == "")
    {
      title = $('#options').attr('placeholder');
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
}

$('#submit').on('click', SubmitFormHandler);