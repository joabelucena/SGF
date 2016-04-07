package br.com.ttrans.samapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="x_pontoControle")
public class PontoControle {
	
	@Id
	@Column(name="pontoID")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(name="descricao")
	private String desc;
	
	@ManyToOne
	@JoinColumn(name="linhaID")
	private Linha linha;
	
	@Column(name="longitude")
	private Double longitude;
	
	@Column(name="latitude")
	private Double latitude;

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

	public Linha getLinha() {
		return linha;
	}

	public void setLinha(Linha linha) {
		this.linha = linha;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}
}
