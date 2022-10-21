import Guest from "../models/GuestModel.js"

export const getGuests = async(req, res) => {
  try {
    const response = await Guest.findAll()
    res.status(200).json(response)
  } catch(error) {
    console.log(error.message)
  }
}

export const addGuest = async(req, res) => {
  try {
    await Guest.create(req.body)
    res.status(201).json({message: 'Guest Added'})
  } catch(error) {
    console.log(error.message)
  }
}

export const updateGuest = async(req, res) => {
  try {
    await Guest.update(req.body, {
      where:{
        id: req.params.id
      }
    })
    res.status(200).json({message: 'Guest Updated'})
  } catch(error) {
    console.log(error.message)
  }
}

export const deleteGuest = async(req, res) => {
  try {
    await Guest.destroy({
      where:{
        id: req.params.id
      }
    })
    res.status(201).json({message: 'Guest Deleted'})
  } catch(error) {
    console.log(error.message)
  }
}