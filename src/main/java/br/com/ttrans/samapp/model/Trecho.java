package br.com.ttrans.samapp.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="Trecho")
public class Trecho {
	
	@Id
	@Column(name="trechoID")
	private String id;
	
	@Column(name="descricao")
	private String desc;
	
	@ManyToOne
	@JoinColumn(name="setorID")
	private Setor setor;
	
	@ManyToOne
	@JoinColumn(name="estacao0")
	private Estacao origem;
	
	@ManyToOne
	@JoinColumn(name="estacao1")
	private Estacao destino;
	
	@Column(name="tempoPerc")
	private Date tempo;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public Setor getSetor() {
		return setor;
	}

	public void setSetor(Setor setor) {
		this.setor = setor;
	}

	public Estacao getOrigem() {
		return origem;
	}

	public void setOrigem(Estacao origem) {
		this.origem = origem;
	}

	public Estacao getDestino() {
		return destino;
	}

	public void setDestino(Estacao destino) {
		this.destino = destino;
	}

	public Date getTempo() {
		return tempo;
	}

	public void setTempo(Date tempo) {
		this.tempo = tempo;
	}

}
