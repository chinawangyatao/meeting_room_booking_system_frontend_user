export type LoginProps = {
  submit?: (v: submitValue | undefined) => void;
  handleRegister?: (v) => void;
};

type submitValue = {
  username: string;
  password: string;
  nickname?: string;
  email?: string;
  captcha?: string;
};

export type RegisterProps = {};
