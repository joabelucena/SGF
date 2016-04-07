package br.com.ttrans.samapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="x_garagem")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Garagem {
	
	@Id
	@Column(name="garagemID")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(name="descricao")
	private String desc;
	
	@ManyToOne
	@JoinColumn(name="sistemaID")
	private Sistema sistema;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public Sistema getSistema() {
		return sistema;
	}

	public void setSistema(Sistema sistema) {
		this.sistema = sistema;
	}

}
