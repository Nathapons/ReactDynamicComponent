import { NextResponse } from "next/server";
import { getJsonData } from "@/utils/json";

export async function GET(req: Request, context: any) {
    const { formId } = context.params;
    const leaveData = getJsonData("leaveform.json")
    const leaveDataForm = leaveData.hasOwnProperty(formId)? leaveData[formId]: new Array()
    
    return NextResponse.json(leaveDataForm)
}