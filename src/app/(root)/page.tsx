'use client'

import { Modal } from "@/components"
import { UserButton } from "@clerk/nextjs"
import { NextPage } from "next"

const SetUpPage : NextPage = () => {
  return (
    <div className="p-4">
     <Modal title="SetUp" isOpen onOpenChange={() => {}} descripcion="test">

     </Modal>

    </div>
  )
}


export default SetUpPage