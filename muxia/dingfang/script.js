function showModal() {
  const nameVal = document.getElementById("name").value;
  const phoneVal = document.getElementById("phone").value;
  const roomTypeVal = document.getElementById("room-type").value;
  const checkInDateVal = document.getElementById("check-in-date").value;
  const checkOutDateVal = document.getElementById("check-out-date").value;
  const commentVal = document.getElementById("comment").value;
  // const information = [name, phone, roomType, checkInDate, checkOutDate];
  // for (const item of information) {
  //   if (item === null) {
  //     console.log(item);
  //   }
  // }
  // console.log(name, phone, roomType, checkInDate, checkOutDate, comment);
  const modalName = document.getElementById("modal-name");
  modalName.innerHTML = nameVal;
  const modalPhone = document.getElementById("modal-phone");
  modalPhone.innerHTML = phoneVal;
  const modalRoomType = document.getElementById("modal-room-type");
  modalRoomType.innerHTML = roomTypeVal;
  const modalCheckInDate = document.getElementById("modal-check-in-date");
  modalCheckInDate.innerHTML = checkInDateVal;
  const modalCheckOutDate = document.getElementById("modal-check-out-date");
  modalCheckOutDate.innerHTML = checkOutDateVal;
  const modalComment = document.getElementById("modal-comment");
  modalComment.innerHTML = commentVal;
}
