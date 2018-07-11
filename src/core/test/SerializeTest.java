package core.test;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;

import core.util.ProtostuffUtil;

public class SerializeTest {
	
	@Test
	public void test() throws ClassNotFoundException, UnsupportedEncodingException {
		List<Object> l = new ArrayList<>();
		l.add("a");
		l.add(new Object());
		Object o = l;
		Class<?> clazz =o.getClass(); 
		byte[] clazzByte = ProtostuffUtil.serializer(clazz.getName());
		byte[] bytes = ProtostuffUtil.serializer(o);
		
		String s = new String(bytes,"UTF-8");
		System.out.println(s);
		System.out.println(s.getBytes());
		for(byte b : bytes) {
			System.out.println(b);
		}
		
		Class<?> clazzz = Class.forName(ProtostuffUtil.deserializer(clazzByte, String.class));
		System.out.println(clazzz);
		List list = (List) ProtostuffUtil.deserializer(bytes, clazzz);
		System.out.println(list.size());
		
//		byte[] bytes2 = new byte[] {0,1,0,0,0,1,0,1};
		
		String str = list.getClass().getName();
		byte[] bs = str.getBytes();
		System.out.println(bs.length);
		String s2 = new String(bs);
		System.out.println(s2);
	}
}
