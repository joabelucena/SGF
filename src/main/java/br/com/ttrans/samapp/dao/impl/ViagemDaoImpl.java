package br.com.ttrans.samapp.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;

import br.com.ttrans.samapp.dao.ViagemDao;
import br.com.ttrans.samapp.model.Viagem;

@Repository
public class ViagemDaoImpl implements ViagemDao {
	
	@Autowired
	private SessionFactory session;

	@Override
	public void add(Viagem obj, Authentication authentication) {
		session.getCurrentSession().save(obj);

	}

	@Override
	public void edit(Viagem obj, Authentication authentication) {
		session.getCurrentSession().update(obj);

	}

	@Override
	public void delete(Viagem obj, Authentication authentication) {
		session.getCurrentSession().delete(obj);

	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Viagem> loadData() {
		return session.getCurrentSession().createCriteria(Viagem.class)
				.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY)
				.list();
	}

}
