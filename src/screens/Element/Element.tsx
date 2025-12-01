import { XIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";

const numpadButtons = [
  { number: "1", gridPos: "row-start-1 col-start-1" },
  { number: "2", gridPos: "row-start-1 col-start-2" },
  { number: "3", gridPos: "row-start-1 col-start-3" },
  { number: "4", gridPos: "row-start-2 col-start-1" },
  { number: "5", gridPos: "row-start-2 col-start-2" },
  { number: "6", gridPos: "row-start-2 col-start-3" },
  { number: "7", gridPos: "row-start-3 col-start-1" },
  { number: "8", gridPos: "row-start-3 col-start-2" },
  { number: "9", gridPos: "row-start-3 col-start-3" },
  { number: "0", gridPos: "row-start-4 col-start-2" },
];

type Stage = "create" | "verify" | "forgot" | "forgot-verify";

export const Element = () => {
  const navigate = useNavigate();
  const storedPasswordFromStorage = localStorage.getItem("meme_dao_password");
  const [stage, setStage] = useState<Stage>(
    storedPasswordFromStorage ? "verify" : "create",
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [storedPassword, setStoredPassword] = useState<string | null>(
    storedPasswordFromStorage,
  );

  const getPasswordInputs = () => {
    return Array(4)
      .fill(null)
      .map((_, i) => ({
        index: i,
        isFilled: i < password.length,
        isError: error.length > 0,
      }));
  };

  useEffect(() => {
    if (password.length === 4) {
      const timer = setTimeout(() => {
        checkPassword();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [password]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setPassword("");
        setError("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const checkPassword = () => {
    if (stage === "create") {
      localStorage.setItem("meme_dao_password", password);
      setStoredPassword(password);
      setPassword("");
      navigate("/home");
    } else if (stage === "verify") {
      if (password === storedPassword) {
        setPassword("");
        navigate("/home");
      } else {
        setError("Неверный пароль");
      }
    } else if (stage === "forgot") {
      if (password === storedPassword) {
        setPassword("");
        setStage("forgot-verify");
      } else {
        setError("Неверный пароль");
      }
    } else if (stage === "forgot-verify") {
      localStorage.setItem("meme_dao_password", password);
      setStoredPassword(password);
      setPassword("");
      // Redirect to home after resetting password
      navigate("/home");
    }
  };

  const handleNumberClick = (number: string) => {
    if (password.length < 4 && !error) {
      setPassword(password + number);
    }
  };

  const handleDelete = () => {
    setPassword(password.slice(0, -1));
  };

  const handleForgot = () => {
    setPassword("");
    setError("");
    setStage("forgot");
  };

  const handleBack = () => {
    setPassword("");
    setError("");
    setStage("verify");
  };

  const getTitle = () => {
    if (stage === "create") return "Придумайте пароль";
    if (stage === "verify") return "Введите пароль";
    if (stage === "forgot") return "Старый пароль";
    return "Новый пароль";
  };

  const shouldShowHeader = stage === "create";

  const passwordInputs = getPasswordInputs();

  return (
    <main className="touch-manipulation select-none overflow-hidden bg-[linear-gradient(180deg,rgba(17,18,19,0.21)_0%,rgba(19,212,123,0.21)_100%),linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%),linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%)] w-full min-h-[100dvh] flex flex-col items-center justify-center py-8 px-4 relative">
      <img
        className="absolute w-[84.37%] h-[49.70%] top-[69.00%] left-[61.02%] pointer-events-none"
        alt="Vector"
        src="/vector-1.svg"
      />

      <img
        className="absolute w-[94.10%] h-[38.94%] top-[11.38%] left-[-43.95%] pointer-events-none"
        alt="Vector"
        src="/vector.svg"
      />

      <div className="w-full max-w-md z-10 flex flex-col items-center gap-8">
        {shouldShowHeader && (
          <div className="flex flex-col items-start px-4">
            <h1 className="w-full [font-family:'Dela_Gothic_One',Helvetica] text-4xl sm:text-4xl md:text-[47px] leading-tight font-normal text-white tracking-[0] text-left">
              Добро
            </h1>
            <h1 className="w-full [font-family:'Dela_Gothic_One',Helvetica] text-4xl sm:text-4xl leading-tight font-normal text-white tracking-[0] text-left">
              пожаловать в
            </h1>

            <h2 className="[font-family:'Dela_Gothic_One',Helvetica] font-normal text-white text-5xl sm:text-5xl md:text-[54px] tracking-[0] leading-tight text-left">
              MEME-DAO
            </h2>
          </div>
        )}

        <div className="w-full flex flex-col items-center space-y-6 relative">
          <p className="[font-family:'Geologica',Helvetica] text-xl sm:text-2xl font-bold text-center font-normal text-white tracking-[0]">
            {getTitle()}
          </p>

          {error && (
            <p className="text-center text-base text-[#EF4948] [font-family:'Geologica',Helvetica]">
              {error}
            </p>
          )}

          <div className="flex gap-2 justify-center">
            {passwordInputs.map((input) => (
              <div
                key={`password-input-${input.index}`}
                className={`w-14 h-16 sm:w-16 sm:h-20 md:w-[70px] md:h-[90px] bg-[#00000080] border-2 rounded-[22px] flex items-center justify-center [font-family:'Geologica',Helvetica] font-semibold text-white text-2xl sm:text-3xl transition-colors ${
                  input.isError
                    ? "border-[#EF4948]"
                    : input.isFilled
                      ? "border-[#01fb01]"
                      : "border-[#ffffff80]"
                }`}
              >
                {input.isFilled ? "*" : ""}
              </div>
            ))}
          </div>

          {(stage === "verify" || stage === "forgot") && (
            <button
              onClick={stage === "verify" ? handleForgot : handleBack}
              className="text-center text-[#01FB01] underline [font-family:'Geologica',Helvetica] font-normal text-base hover:opacity-80 transition-opacity touch-manipulation select-none"
            >
              {stage === "verify" ? "Забыли пароль?" : "Назад"}
            </button>
          )}

          <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-sm">
            {numpadButtons.map((button, index) => (
              <Button
                key={`numpad-${index}`}
                onClick={() => handleNumberClick(button.number)}
                variant="ghost"
                className={`${button.gridPos} touch-manipulation select-none w-full aspect-square min-h-[90px] sm:min-h-[100px] md:min-h-[120px] bg-[#00000080] backdrop-blur-[13px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(13px)_brightness(100%)] rounded-[22px] [font-family:'Geologica',Helvetica] font-semibold text-white text-2xl sm:text-3xl transition-all active:bg-[#00000099]`}
              >
                {button.number}
              </Button>
            ))}

            <Button
              onClick={handleDelete}
              variant="ghost"
              className="touch-manipulation select-none row-start-4 col-start-3 w-full aspect-square min-h-[90px] sm:min-h-[100px] md:min-h-[120px] bg-[#00000080] backdrop-blur-[13px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(13px)_brightness(100%)] rounded-[22px] flex items-center justify-center transition-all active:bg-[#00000099]"
            >
              <XIcon className="w-8 h-8 sm:w-[35px] sm:h-[29px] text-white" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};
