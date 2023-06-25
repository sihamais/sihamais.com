import * as SibApiV3Sdk from '@sendinblue/client'

const brevoApiKey = process.env.BREVO_API_KEY
const listID = process.env.BREVO_LIST_ID

export default function handler(req, res) {
  let apiInstance = new SibApiV3Sdk.ContactsApi()
  let apiKey = apiInstance.authentications['apiKey']
  apiKey.apiKey = brevoApiKey

  let createContact = new SibApiV3Sdk.CreateContact()
  createContact.email = req.body.email
  createContact.listIds = [+listID]

  apiInstance.createContact(createContact).then(
    function (data) {
      res.redirect(302, '/confirmation')
    },
    function (error) {
      console.log(error)
      res.redirect(302, '/oops')
    }
  )
}
