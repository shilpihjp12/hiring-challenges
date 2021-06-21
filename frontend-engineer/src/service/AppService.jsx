const AppURL =
  "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=";
const token = "jPRsT56LbA9T";

export async function getListAllMessages() {
  let response = {};
  await fetch(AppURL + token)
    .then((res) => res.json())
    .then((data) => {
      response = data;
    });
  return response;
}
