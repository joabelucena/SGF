package br.com.ttrans.samapp.dao.impl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;

import br.com.ttrans.samapp.dao.TrechoDao;
import br.com.ttrans.samapp.model.Trecho;

@Repository
public class TrechoDaoImpl implements TrechoDao {
	
	@Autowired
	private SessionFactory session;

	@Override
	public void add(Trecho obj, Authentication authentication) {
		session.getCurrentSession().save(obj);

	}

	@Override
	public void edit(Trecho obj, Authentication authentication) {
		session.getCurrentSession().update(obj);

	}

	@Override
	public void delete(Trecho obj, Authentication authentication) {
		session.getCurrentSession().delete(obj);

	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Trecho> loadData() {
		return session.getCurrentSession().createCriteria(Trecho.class).list();
	}

}
