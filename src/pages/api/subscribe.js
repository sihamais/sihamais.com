import mailjet from 'node-mailjet'

const mailjetPubKey = process.env.MJ_APIKEY_PUBLIC
const mailjetSecKey = process.env.MJ_APIKEY_PRIVATE

export default function handler(req, res) {
  let email = req.body.email

  let mailjetConn = mailjet.apiConnect(mailjetPubKey, mailjetSecKey)

  let request = mailjetConn.post('contact', { version: 'v3' }).request({
    IsExcludedFromCampaigns: 'false',
    Name: email.split('@')[0],
    Email: email,
  })

  request
    .then((result) => {
      res.redirect(307, '/thank-you')
    })
    .catch((err) => {
      console.log(err)
    })
}
