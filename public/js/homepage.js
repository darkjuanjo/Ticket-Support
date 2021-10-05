async function logoutHandler() {
  console.log('log out');
  const response = await fetch('/api/users/logout');
  console.log(response);
  window.location.reload();
};

$('#logout').on('click', logoutHandler);

async function deleteTicketHandler() {
  const btnvalue = $(this).data('deleteid');

  const response = await fetch(`/api/ticket/${btnvalue}`, {
    method: 'DELETE'
  });
  console.log(response);
  window.location.reload();
}

$('.delete-btn').on('click', deleteTicketHandler);

async function editTicketHandler() {

  const btnvalue = $(this).data('editid');
  console.log(`clicked: ${btnvalue}`)
  window.location.href = `/edit/${btnvalue}`;
}

$('.edit-btn').on('click', editTicketHandler);