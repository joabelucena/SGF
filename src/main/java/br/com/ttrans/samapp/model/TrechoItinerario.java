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
@Table(name="x_trecho_itinerario")
public class TrechoItinerario {
	
	@Id
	@Column(name="mockID")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@ManyToOne
	@JoinColumn(name="trechoID")
	private Trecho trecho;
	
	@ManyToOne
	@JoinColumn(name="itinerarioID")
	private Itinerario itinerario;
	
	@Column(name="sequence")
	private int seq;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Trecho getTrecho() {
		return trecho;
	}

	public void setTrecho(Trecho trecho) {
		this.trecho = trecho;
	}

	public Itinerario getItinerario() {
		return itinerario;
	}

	public void setItinerario(Itinerario itinerario) {
		this.itinerario = itinerario;
	}

	public int getSeq() {
		return seq;
	}

	public void setSeq(int seq) {
		this.seq = seq;
	}

}
