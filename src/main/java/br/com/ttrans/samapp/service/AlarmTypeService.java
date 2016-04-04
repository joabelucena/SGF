package br.com.ttrans.samapp.service;

import java.util.List;

import org.springframework.security.core.Authentication;

import br.com.ttrans.samapp.model.AlarmType;

public interface AlarmTypeService {
	public void add(AlarmType type, Authentication authentication);
	public void edit(AlarmType type, Authentication authentication);
	public void delete(AlarmType type, Authentication authentication);
	public List<AlarmType> loadData();
}
