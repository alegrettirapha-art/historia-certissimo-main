import React from 'react';
import './QuestaoCard.css';

export default function QuestaoCard({
  q,
  index,
  respostaUsuario,
  onChangeResposta,
  corrigido
}) {
  const letraCorreta = (q.letra_correta || 'A').trim().toUpperCase();

  const obterClasseOpcao = (letraOpcao) => {
    if (!corrigido) return 'opcao';

    if (letraOpcao === letraCorreta) {
      return 'opcao correta';
    }

    if (
      respostaUsuario === letraOpcao &&
      respostaUsuario !== letraCorreta
    ) {
      return 'opcao errada';
    }

    return 'opcao';
  };

  const obterClasseFeedback = () => {
    if (!respostaUsuario) return 'feedback nao-respondida';

    return respostaUsuario === letraCorreta
      ? 'feedback acertou'
      : 'feedback errou';
  };

  return (
    <div className="questao-card">

      <p className="enunciado">
        <strong>Questão {index + 1}:</strong> {q.enunciado}
      </p>

      <div className="info-container">
        <span className="info-tag destaque">
          {q.nome_vestibular}
        </span>

        <span className="info-tag">
          Ano: {q.ano}
        </span>

        <span className="info-tag">
          Tema: {q.nome_topico}
        </span>

        <span className="info-tag">
          Nível: {q.dificuldade}
        </span>
      </div>

      <hr className="linha-divisoria" />

      <div className="opcoes">
        {['A', 'B', 'C', 'D', 'E'].map(letra => (
          <label
            key={letra}
            className={obterClasseOpcao(letra)}
          >
            <input
              type="radio"
              name={`questao_${q.id_questao}`}
              value={letra}
              checked={respostaUsuario === letra}
              onChange={() =>
                onChangeResposta(q.id_questao, letra)
              }
              disabled={corrigido}
            />

            <strong>{letra})</strong> Marcar Alternativa {letra}
          </label>
        ))}
      </div>

      {corrigido && (
        <div className={obterClasseFeedback()}>

          {!respostaUsuario ? (
            <p>
              <strong>⚠️ Não respondida!</strong>
              {' '}O gabarito correto é a Letra {letraCorreta}.
            </p>

          ) : respostaUsuario === letraCorreta ? (

            <p>
              <strong>✔ Você acertou!</strong> Parabéns.
            </p>

          ) : (

            <p>
              <strong>❌ Você errou!</strong>
              {' '}A resposta correta é a Letra {letraCorreta}.
            </p>
          )}

          <div className="explicacao">
            <strong>Explicação:</strong>

            {q.comentario ||
              'Nenhuma explicação cadastrada para esta questão.'}
          </div>

        </div>
      )}
    </div>
  );
}