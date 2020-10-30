import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import { publicRoutes, privateRoutes, privateRouteAdmin } from "./routeConfig";
import { PrivateRoutes, PrivateRouteAdmin } from "./PrivateRoutes";
import Error404 from "../containers/Error404/Error404";
import { checkTokenExpration } from "../Helpers/checkRoleExpration";
import { checkRole } from "../Helpers/checkRole";

Routes.propTypes = {};

function Routes(props) {
  useEffect(() => {
    document.title = "BKDN";
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        {checkTokenExpration() && checkRole() === "admin" ? (
          <Redirect to="/management/daily-reports-admin" />
        ) : checkTokenExpration() && checkRole() !== "admin" ? (
          <Redirect to="/management/daily-reports" />
        ) : (
          <Redirect to="/auth/login" />
        )}
      </Route>
      {publicRoutes.map((element, index) => {
        let arrayRoute = element.subroutes.map((e, i) => e.path);
        return (
          <Route key={index} exact={true} path={arrayRoute}>
            <element.layout>
              <Switch>
                {element.subroutes.map((element1, index1) => {
                  return (
                    <PublicRoutes key={index1} {...element1}></PublicRoutes>
                  );
                })}
              </Switch>
            </element.layout>
          </Route>
        );
      })}
      {privateRoutes.map((element, index) => {
        let arrayRoute = element.subroutes.map((e, i) => e.path);

        return (
          <Route key={index} exact={true} path={arrayRoute}>
            <element.layout>
              <Switch>
                {element.subroutes.map((element1, index1) => {
                  return (
                    <PrivateRoutes key={index1} {...element1}></PrivateRoutes>
                  );
                })}
              </Switch>
            </element.layout>
          </Route>
        );
      })}
      {privateRouteAdmin.map((element, index) => {
        let arrayRoute = element.subroutes.map((e, i) => e.path);
        return (
          <Route key={index} exact path={arrayRoute}>
            <element.layout>
              <Switch>
                {element.subroutes.map((element1, index1) => {
                  return (
                    <PrivateRouteAdmin
                      key={index1}
                      {...element1}
                    ></PrivateRouteAdmin>
                  );
                })}
              </Switch>
            </element.layout>
          </Route>
        );
      })}
      <Route
        path="*"
        render={() => <Redirect to="/errors/error404"></Redirect>}
      ></Route>
    </Switch>
  );
}

export default Routes;
