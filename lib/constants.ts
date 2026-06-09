export const COUNTRY_CODE = "91"
export const PHONE_NUMBER = "9437374222"
export const WHATSAPP_NUMBER = `${COUNTRY_CODE}${PHONE_NUMBER}`
export const DISPLAY_PHONE_NUMBER = `+${COUNTRY_CODE} ${PHONE_NUMBER}`

export const OWNER_PHONE_NUMBER = "7008499542"
export const DISPLAY_OWNER_PHONE_NUMBER = `+${COUNTRY_CODE} ${OWNER_PHONE_NUMBER}`

export interface StaffMember {
  name: string
  specialization: string
  displayName: string
}

export const STAFF_MEMBERS: StaffMember[] = [
  {
    name: "Sunita Das",
    specialization: "Beautician & Hairstylist",
    displayName: "Sunita Das (Beautician & Hairstylist)"
  },
  {
    name: "Kabita Pattnaik (Jolly)",
    specialization: "Beautician",
    displayName: "Kabita Pattnaik (Jolly) (Beautician)"
  },
  {
    name: "Sandhya Rani Sahu",
    specialization: "Beautician",
    displayName: "Sandhya Rani Sahu (Beautician)"
  },
  {
    name: "Khusi Nayak",
    specialization: "Beautician, Hairstylist & Makeup Artist",
    displayName: "Khusi Nayak (Beautician, Hairstylist & Makeup Artist)"
  },
  {
    name: "Jhuma Biswas",
    specialization: "Beautician, Hairstylist & Nail Artist",
    displayName: "Jhuma Biswas (Beautician, Hairstylist & Nail Artist)"
  }
]
