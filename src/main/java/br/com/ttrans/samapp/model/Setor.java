package br.com.ttrans.samapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="x_setor")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Setor {

	@Id
	@Column(name="setorID")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(name="descricao")
	private String desc;
	
	public Setor(){}

	public Setor(int id) {
		super();
		this.id = id;
	}
	
	public Setor(String desc) {
		super();
		this.desc = desc;
	}


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
}
