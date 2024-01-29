import { useState } from 'react'
import styles from './index.module.css'

function App() {
  const [password, setPassword] = useState();
  const [copyButtonText, setCopyButton] = useState("Copiar");

  function generatePassword(){
    var password = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
      password += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setPassword(password);
    setCopyButton("Copiar");
  }

  function copyPassword(){
    navigator.clipboard.writeText(password);
    setCopyButton("Copiado!");
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Gerador de Senhas</h1>
        <div className={styles.buttons}>
          <button onClick={generatePassword}>Gerar!</button>
          <button onClick={copyPassword}>{copyButtonText}</button>
        </div>
        <p className={styles.passwordText}>{password}</p>
      </div>
    </>
  )
}

export default App
