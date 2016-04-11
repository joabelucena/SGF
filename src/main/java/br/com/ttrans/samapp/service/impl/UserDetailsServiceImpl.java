package br.com.ttrans.samapp.service.impl;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.ttrans.samapp.dao.UserDao;

@Service("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserDao userDao;

	@Override
	@Transactional(readOnly = true)
	public UserDetails loadUserByUsername(String username)
			throws UsernameNotFoundException {
		System.out.println("Username: " + username);
		br.com.ttrans.samapp.model.User user = userDao.get(username); //our own Users model class
		
		System.out.println("Usuario: " + user.getUserID());
		System.out.println("Senha: " + user.getPassword());

		if(user!=null){
			
			String password = user.getPassword();
			//additional information on the security object
			boolean enabled = true; //user.getStatus().equals(UserStatus.ACTIVE);
			boolean accountNonExpired = true;//user.getStatus().equals(UserStatus.ACTIVE);
			boolean credentialsNonExpired = true;//user.getStatus().equals(UserStatus.ACTIVE);
			boolean accountNonLocked = true;//user.getStatus().equals(UserStatus.ACTIVE);
			
			Collection<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
			
			authorities.add(new SimpleGrantedAuthority(user.getRole().getDisplayName()));			
			
			User securityUser = new User(username, password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
			return securityUser;
		}else{
			throw new UsernameNotFoundException("Users Not Found!!!");
		}
	}
}
