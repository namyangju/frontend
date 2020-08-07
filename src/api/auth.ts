import client, { getNetworkError } from "./client";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const request = await client.post("/auth", { userid: email, password });
    const { access, refresh } = request.data.data.token;

    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);

    return { accessToken: access, refreshToken: refresh };
  } catch (e) {
    throw getNetworkError(e);
  }
}
