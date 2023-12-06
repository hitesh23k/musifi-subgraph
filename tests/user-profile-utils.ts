import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { ProfileUpdated } from "../generated/UserProfile/UserProfile"

export function createProfileUpdatedEvent(
  user: Address,
  name: string,
  profilePicHash: string
): ProfileUpdated {
  let profileUpdatedEvent = changetype<ProfileUpdated>(newMockEvent())

  profileUpdatedEvent.parameters = new Array()

  profileUpdatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  profileUpdatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  profileUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "profilePicHash",
      ethereum.Value.fromString(profilePicHash)
    )
  )

  return profileUpdatedEvent
}
