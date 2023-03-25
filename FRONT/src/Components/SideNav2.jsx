import { Breadcrumb, Layout, Menu } from "antd";
import { useState } from "react";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { BsFillFilePersonFill } from "react-icons/bs";
import { RiAdminLine, RiTeamLine } from "react-icons/ri";
import { VscBook } from "react-icons/vsc";
import { Link } from "react-router-dom";
import OrderDisplay from "./OrderDisplay";
import Home from "./Home";
import Login from "./Login";
import Sign from "./Sign";
import { Route, Routes } from "react-router-dom";
import Books from "./Books";
import AddBook from "./AddBook";
import Edit from "./Edit";
import CreateClient from "./CreateClient";
import TeamMember from "./TeamMember";
import Customer from "./Customer";
import ClientDisplay from "./ClientDisplay";
import MemberDisplay from "./MemberDisplay";
import CustomerDisplay from "./CustomerDisplay";
import SideNav2 from "./SideNav2";
import Order from "./Order";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/home">Home</Link>, "1", <AiOutlineHome />),
  getItem(<Link to="/login">Login</Link>, "2", <BiLogIn />),
  getItem("Book", "3", <VscBook />, [
    getItem(<Link to="/book">Book</Link>, "4"),
    getItem(<Link to="/createbook">Create Book</Link>, "5"),
  ]),
  getItem("Client", "6", <RiAdminLine />, [
    getItem(<Link to="/client">Client</Link>, "7"),
    getItem(<Link to="/createclient">Create Client</Link>, "8"),
  ]),
  getItem("Team Member", "9", <RiTeamLine />, [
    getItem(<Link to="/member">Team Member</Link>, "10"),
    getItem(<Link to="/createmember">Create Team Member</Link>, "11"),
  ]),
  getItem("Customer", "12", <BsFillFilePersonFill />, [
    getItem(<Link to="/customer">Customer</Link>, "13"),
    getItem(<Link to="/createcustomer">Create Customer</Link>, "14"),
  ]),
  getItem("Order", "15", <AiOutlineShoppingCart />, [
    getItem(<Link to="/order">Order</Link>, "16"),
    getItem(<Link to="/createorder">Create Order</Link>, "17"),
  ]),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={[]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: "white",
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          ></Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "white",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign" element={<Sign />} />
              <Route path="/home" element={<Home />} />

              <Route path="/book" element={<Books />} />
              <Route path="/createbook" element={<AddBook />} />
              <Route path="/edit/:id" element={<Edit />} />

              <Route path="/createclient" element={<CreateClient />} />
              <Route path="/client" element={<ClientDisplay />} />

              <Route path="/createmember" element={<TeamMember />} />
              <Route path="/member" element={<MemberDisplay />} />

              <Route path="/createcustomer" element={<Customer />} />
              <Route path="/customer" element={<CustomerDisplay />} />

              <Route path="/createorder" element={<Order />} />
              <Route path="/order" element={<OrderDisplay />} />

              <Route path="/nav" element={<SideNav2 />} />

            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        ></Footer>
      </Layout>
    </Layout>
  );
};
export default App;
