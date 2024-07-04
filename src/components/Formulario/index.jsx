import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);
    const [classificacao, setClasificacao] = useState('');
    const [erro, setErro] = useState(false);

    function calculaImc() {
        const res = peso / (altura * altura);
        setImc(res.toFixed(2));
        setErro(false);

        if (res <= 1) {
            setErro(true);
        } else if (res < 18.5) {
            setClasificacao('Abaixo do Peso');
        } else if (res > 18.5 && res <= 24.9) {
            setClasificacao('Normal');
        } else if (res > 25 && res <= 29.9) {
            setClasificacao('Sobrepeso');
        } else if (res > 30 && res <= 34.9) {
            setClasificacao('Obesidade grau I');
        } else if (res > 35 && res <= 39.9) {
            setClasificacao('Obesidade grau II');
        } else {
            setClasificacao('Obesidade grau III');
        }        
    }

    return (
        <div className="container">
            <form>
                <h1 className={styles.titulo}>Calculadora de IMC</h1>
                <input type="number" placeholder='Ex: 1.70' onBlur={(e) => setAltura(Number(e.target.value))} />
                <input type="number" placeholder='Ex: 95' onBlur={(e) => setPeso(Number(e.target.value))} />
                <button type='button' onClick={calculaImc}>Calcular</button>
            </form>

            {erro == true && (
                <p className={styles.erro}>Erro ao calcular, certifique-se de colocar o ponto no valor altura.</p>
            )} 

            {imc > 0 && (
                <>
                    <p className={styles.resultado}>
                        Seu IMC: <b>{imc}</b>
                    </p>
                    <p className={styles.resultado}>
                        Classificação: <b>{classificacao}</b>
                    </p>
                </>
            )}
        </div>
    )
}

export default Formulario;