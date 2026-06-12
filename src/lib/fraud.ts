import { API_URL } from "@/lib/config";

export interface FraudReport {
  id: number | string;
  impostorDetails: string;
  contactInfo: string;
  comments: string;
  createdAt: string;
}

export interface FraudReportInput {
  impostorDetails: string;
  contactInfo: string;
  comments: string;
}

export async function createFraudReport(
  input: FraudReportInput
): Promise<void> {
  const response = await fetch(`${API_URL}/api/Fraud`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status} al enviar el reporte`);
  }
}

export async function getFraudReports(): Promise<FraudReport[]> {
  const response = await fetch(`${API_URL}/api/Fraud`);

  if (!response.ok) {
    throw new Error(`Error ${response.status} al obtener los reportes`);
  }

  return response.json();
}
