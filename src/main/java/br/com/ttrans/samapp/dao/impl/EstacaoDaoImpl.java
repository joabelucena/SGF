package br.com.ttrans.samapp.dao.impl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;

import br.com.ttrans.samapp.dao.EstacaoDao;
import br.com.ttrans.samapp.model.Estacao;

@Repository
public class EstacaoDaoImpl implements EstacaoDao {
	
	@Autowired
	private SessionFactory session;

	@Override
	public void add(Estacao obj, Authentication authentication) {
		session.getCurrentSession().save(obj);

	}

	@Override
	public void edit(Estacao obj, Authentication authentication) {
		session.getCurrentSession().update(obj);

	}

	@Override
	public void delete(Estacao obj, Authentication authentication) {
		session.getCurrentSession().delete(obj);

	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Estacao> loadData() {
		return session.getCurrentSession().createCriteria(Estacao.class).list();
	}

}
