async function SubmitFormHandler(event) {
  const title = $('#title').val();
  const content = $('#description').val().trim();
  const category = $('#options').val();


  if (!title && !user && !content && !category) {
    return console.log('Error cannot leave empty fields!');
  } else {
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

$('#form').on('click', SubmitFormHandler);