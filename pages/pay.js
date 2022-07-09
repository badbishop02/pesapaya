export async function pay () {

    fetch('/Ev15EZlIj6Y/https://tinypesa.com/api/v1/express/initialize', {
        method: 'POST',
        body: "amount=1&msisdn=0111225811&account_no=200",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(objectWithData),
      })
    }