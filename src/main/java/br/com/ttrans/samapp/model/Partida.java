package br.com.ttrans.samapp.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="x_partida")
public class Partida {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="partidaID")
	private int id;
	
	@Column(name="horaPartida")
	private Date partida;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getPartida() {
		return partida;
	}

	public void setPartida(Date partida) {
		this.partida = partida;
	}
	
	
}