package br.com.ttrans.samapp.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="x_logViagem")
public class LogViagem {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="logID")
	private int id;
	
	@ManyToOne
	@JoinColumn(name="estacaoID")
	private Estacao estacao;
	
	@Column(name="horaPlan")
	private Date horaPlan;
	
	@Column(name="horaReal")
	private Date horaReal;

	@Column(name="horaRepla")
	private Date horaRepla;
	
	@Column(name="passagIn")
	private int passagIn;
	
	@Column(name="passagOut")
	private int passagOut;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Estacao getEstacao() {
		return estacao;
	}

	public void setEstacao(Estacao estacao) {
		this.estacao = estacao;
	}

	public Date getHoraPlan() {
		return horaPlan;
	}

	public void setHoraPlan(Date horaPlan) {
		this.horaPlan = horaPlan;
	}

	public Date getHoraReal() {
		return horaReal;
	}

	public void setHoraReal(Date horaReal) {
		this.horaReal = horaReal;
	}

	public Date getHoraRepla() {
		return horaRepla;
	}

	public void setHoraRepla(Date horaRepla) {
		this.horaRepla = horaRepla;
	}

	public int getPassagIn() {
		return passagIn;
	}

	public void setPassagIn(int passagIn) {
		this.passagIn = passagIn;
	}

	public int getPassagOut() {
		return passagOut;
	}

	public void setPassagOut(int passagOut) {
		this.passagOut = passagOut;
	}

}
