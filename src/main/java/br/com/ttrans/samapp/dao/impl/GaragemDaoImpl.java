package br.com.ttrans.samapp.dao.impl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;

import br.com.ttrans.samapp.dao.GaragemDao;
import br.com.ttrans.samapp.model.Garagem;

@Repository
public class GaragemDaoImpl implements GaragemDao {
	
	@Autowired
	private SessionFactory session;

	@Override
	public void add(Garagem obj, Authentication authentication) {
		session.getCurrentSession().save(obj);

	}

	@Override
	public void edit(Garagem obj, Authentication authentication) {
		session.getCurrentSession().update(obj);

	}

	@Override
	public void delete(Garagem obj, Authentication authentication) {
		session.getCurrentSession().delete(obj);

	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Garagem> loadData() {
		return session.getCurrentSession().createCriteria(Garagem.class).list();
	}

}
