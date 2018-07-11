package core.database;

import java.io.IOException;

import org.mapdb.DataInput2;
import org.mapdb.DataOutput2;
import org.mapdb.Serializer;

import core.util.ProtostuffUtil;

public class ProtostuffSerializer implements Serializer<Object> {

	@Override
	public void serialize(DataOutput2 out, Object value) throws IOException {
		byte[] bytes = ProtostuffUtil.serializer(value);
		byte[] nameBytes = value.getClass().getName().getBytes();

		
		out.writeInt(nameBytes.length);
		out.write(nameBytes);
		out.write(bytes);

	}

	@Override
	public Object deserialize(DataInput2 input, int available) throws IOException {
		int clazzNameLength = input.readInt();

		byte[] nameBytes = new byte[clazzNameLength];

		input.readFully(nameBytes);

		byte[] dataBytes = new byte[available - 4 - nameBytes.length];

		input.readFully(dataBytes);

		String clazzName = new String(nameBytes);

		System.out.println("clazzName: " + clazzName);

		Class<?> clazz = null;
		try {
			clazz = Class.forName(clazzName);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		Object o = ProtostuffUtil.deserializer(dataBytes, clazz);

		return o;
	}

}
