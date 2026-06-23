console.log("Signup frontend javascript file");

$(function () {
  const fileTarget = $(".file-box .upload-hidden");
  let fileName;

  fileTarget.on("change", function () {
    if (window.FileReader) {
      const uploadedFile = $(this)[0].files[0],
        // console.log("Uploaded file:", uploadedFile);
        fileType = uploadedFile["type"],
        validImageType = ["image/jpeg", "image/jpg", "image/png"];
      if (!validImageType.includes(fileType)) {
        alert("Please insert only jpeg, jpg, and png!");
      } else {
        if (uploadedFile) {
          console.log(URL.createObjectURL(uploadedFile));
          $(".upload-img-frame").attr("src", URL.createObjectURL(uploadedFile)).addClass("success");
        }
        filename = $(this)[0].files[0].name;
      }
      $(this).siblings(".upload-name").val(filename);
    }
  });
});

function validateSignupForm() {
  const memberNick = $(".member-nick").val(),
    memberPhone = $(".member-phone").val(),
    memberPassword = $(".member-password").val(),
    confirmPassword = $(".confirm-password").val();

  if (memberNick === "" || memberPhone === "" || memberPassword === "" || confirmPassword === "") {
    alert("Please fill in all required fields.");
    return false;
  }

  if (memberPassword !== confirmPassword) {
    alert("Passwords differ. Please check your password.");
    return false;
  }

  const memberImage = $(".member-image").get(0).files[0]
    ? $(".member-image").get(0).files[0].name
    : null;
  if (!memberImage) {
    alert("Please insert restaurant image!");
    return false;
  }
}
