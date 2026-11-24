import React from 'react';
import './FiltroRodape.css';

export default function FiltroRodape({
  filtros,
  onChangeFiltro,
  onFiltrarClick
}) {
  return (
    <footer className="filtro-rodape">

      <div className="filtro-grupo">
        <span className="filtro-titulo">VESTIBULAR</span>

        <select
          name="vestibular"
          value={filtros.vestibular}
          onChange={onChangeFiltro}
          className="filtro-select"
        >
          <option value="">Todos</option>
          <option value="ENEM">ENEM</option>
          <option value="FUVEST">FUVEST</option>
          <option value="UNICAMP">UNICAMP</option>
          <option value="USP">USP</option>
        </select>
      </div>

      <div className="filtro-grupo">
        <span className="filtro-titulo">ANO</span>

        <select
          name="ano"
          value={filtros.ano}
          onChange={onChangeFiltro}
          className="filtro-select"
        >
          <option value="">Todos</option>

          {[2025, 2024, 2023, 2022, 2021, 2018, 2017, 2014, 2013, 2012, 2011, 2010].map(ano => (
            <option key={ano} value={ano}>
              {ano}
            </option>
          ))}
        </select>
      </div>

      <div className="filtro-grupo">
        <span className="filtro-titulo">TEMA</span>

        <select
          name="topico"
          value={filtros.topico}
          onChange={onChangeFiltro}
          className="filtro-select filtro-topico"
        >
          <option value="">Todos</option>
          <option value="Era Vargas">Era Vargas</option>
          <option value="Brasil Império">Brasil Império</option>
          <option value="Guerra Fria">Guerra Fria</option>
          <option value="Ditadura Militar no Brasil">Ditadura Militar</option>
          <option value="Independência do Brasil">Independência do Brasil</option>
          <option value="Revolução Industrial">Revolução Industrial</option>
          <option value="Iluminismo">Iluminismo</option>
        </select>
      </div>

      <div className="filtro-grupo">
        <span className="filtro-titulo">DIFICULDADE</span>

        <select
          name="dificuldade"
          value={filtros.dificuldade}
          onChange={onChangeFiltro}
          className="filtro-select"
        >
          <option value="">Todas</option>
          <option value="facil">Fácil</option>
          <option value="media">Média</option>
          <option value="dificil">Difícil</option>
        </select>
      </div>

      <button
        onClick={onFiltrarClick}
        className="botao-filtrar"
      >
        Filtrar Banco
      </button>

    </footer>
  );
}