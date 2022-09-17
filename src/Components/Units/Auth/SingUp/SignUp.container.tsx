import { useApolloClient, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../Commons/Store/Auth/AccessToken";
import { signUpInputState } from "../../../../Commons/Store/Auth/SignUpState";
import { userInfoState } from "../../../../Commons/Store/Auth/UserInfoState";
import {
  IMutation,
  IMutationCreateMailTokenArgs,
  IMutationCreateUserArgs,
  IMutationUserLoginArgs,
  IMutationVerifyMailTokenArgs,
} from "../../../../Commons/Types/Generated/types";
import { FETCH_LOGIN_USER, USER_LOGIN } from "../Login/Login.queries";
import {
  CREATE_MAIL_TOKEN,
  CREATE_USER,
  VERIFY_MAIL_TOKEN,
} from "./Page/SignUp.queries";
import SignUpUI from "./SignUp.presenter";

export default function SignUpContainer() {
  const router = useRouter();
  const client = useApolloClient();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const [createMailToken] = useMutation<
    Pick<IMutation, "createMailToken">,
    IMutationCreateMailTokenArgs
  >(CREATE_MAIL_TOKEN);

  const [verifyMailToken] = useMutation<
    Pick<IMutation, "verifyMailToken">,
    IMutationVerifyMailTokenArgs
  >(VERIFY_MAIL_TOKEN);

  const [loginUser] = useMutation<
    Pick<IMutation, "userLogin">,
    IMutationUserLoginArgs
  >(USER_LOGIN);

  const handleCreateMailToken = async (email: string) => {
    console.log("handleCreateMailToken", email);
    if (!email) return false;

    try {
      const { data } = await createMailToken({
        variables: {
          email,
        },
      });

      return data?.createMailToken;
    } catch (e) {
      console.log("handleCreateMailTokenError", e);
      return false;
    }
  };

  const handleVerifyMailToken = async (email: string, code: string) => {
    console.log("handleVerifyMailToken", email, code);
    if (!code) return false;

    try {
      const { data } = await verifyMailToken({
        variables: {
          email,
          code,
        },
      });

      return data?.verifyMailToken;
    } catch (e) {
      console.log("verifyMailTokenError", e);
      return false;
    }
  };

  const handleSignUp = async (email: string, password: string) => {
    console.log("handleSignUp", email, password);
    if (!password) return false;

    try {
      const { data } = await createUser({
        variables: {
          createUserInput: {
            email,
            password,
            pet: false,
            phone: "dddd",
          },
        },
      });

      if (!data?.createUser.id) {
        throw Error("회원가입 실패. 관리자에게 문의하세요.");
      }

      router.replace(`/profile/init?user=${data.createUser.id}`);

      return (data?.createUser?.id?.length || "") > 0;
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
      return false;
    }
  };

  return (
    <SignUpUI
      handleCreateMailToken={handleCreateMailToken}
      handleVerifyMailToken={handleVerifyMailToken}
      handleSignUp={handleSignUp}
    />
  );
}
